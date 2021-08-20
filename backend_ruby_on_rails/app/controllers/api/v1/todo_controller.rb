class Api::V1::TodoController < Api::ApiController
  before_action :authenticate_request
  
  def index
    todos = current_user.todo.order("created_at DESC")

    render json: todos
  end

  def create
    todo = current_user.todo.create(todo_param)
    todo[:created_at] = Time.now.to_date.to_s

    if todo.save
      render json: todo, status: 201
    else 
      render json: { errors: 'Erro de comunicação'}, status: :unprocessable_entity
    end
  end

  def update
    todo = current_user.todo.find(params[:id])
    
    new_attrs = {}
    new_attrs[:title] = params[:title] if params.has_key?(:title)
    new_attrs[:done] = params[:done] if params.has_key?(:done)
    todo[:updated_at] = Time.now
    
    if todo.update(new_attrs)
      render json: todo
    else
      render json: {errors: 'Erro de comunicação'}, status: :unprocessable_entity
    end
  end

  def destroy
    todo = current_user.todo.find(params[:id])
    
    todo.destroy

    head :no_content, status: :ok
  end

  def destroy_all_selected
    todo = current_user.todo.find(params[:id])

    # todo.each(&:destroy)
    todo.each { |todo| todo.destroy }

    head :no_content
  end

  private

  def todo_param
    params.require(:todo).permit(:title, :done)
  end
end
