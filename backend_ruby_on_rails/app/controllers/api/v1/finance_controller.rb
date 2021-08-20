class Api::V1::FinanceController < Api::ApiController
  before_action :authenticate_request

  def index
    finances = current_user.finance
    render json: finances
  end

  def create
    finances = current_user.finance.create(finance_params)

    if finances.save
      render json: finances, status: 201
    else
      render json: { errors: 'Erro de comunicação'}, status: :unprocessable_entity
    end
  end

  def update
    finances = current_user.finance.find(params[:id])

    new_attrs = {}
    new_attrs[:account] = params[:account] if params.has_key?(:account)
    new_attrs[:value] = params[:value] if params.has_key?(:value)
    new_attrs[:expiration_date] = params[:expiration_date] if params.has_key?(:expiration_date)

    if finances.update(new_attrs)
      render json: finances, status: 200
    else
      render json: { errors: 'Erro de comunicação'}, status: :unprocessable_entity
    end
  end

  def destroy
    finance = current_user.finance.find_by(params[:id])
    
    finance.destroy

    head :no_content, status: :ok
  end

  private

  def finance_params
    params.require(:finance).permit(
      :id,
      :account,
      :value,
      :expiration_date,
    )
  end
end
