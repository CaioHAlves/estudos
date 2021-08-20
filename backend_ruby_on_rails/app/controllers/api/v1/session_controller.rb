class Api::V1::SessionController < Api::ApiController
  skip_before_action :authenticate_request

  def authenticate
    command = AuthenticateUser.call(name: session_params[:name], password: session_params[:password])

    if command.success?
      jwt = command.result

      render json: { auth_token: jwt}
    else
      render json: { error: command.errors }, status: :unauthorized
    end
  end

  def session_params
    params.require(:session).permit([
      :name,
      :password
    ])
  end
end
