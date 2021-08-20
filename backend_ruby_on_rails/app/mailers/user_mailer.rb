class UserMailer < ApplicationMailer
  # before_action :load_user
  default from: 'no-replay@gmail.com'

  def welcome_email
    @user = params[:user]
    @url  = 'https://localhost:3000/'
    mail(to: @user.email, subject: 'Boas vindas ao nosso incrível site!')
  end

  # def load_user
  #   @user = params[:user]
  # end
end
