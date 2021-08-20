class Api::ApiController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_request

  attr_reader :current_user

  private

  def authenticate_request
    command = AuthorizeApiRequest.call(headers: request.headers)

    if command.success?
      @current_user = command.result
    else
      render json: { error: command.errors }, status: :unauthorized
    end
  end
end