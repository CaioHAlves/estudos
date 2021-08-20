class AuthenticateUser
  prepend SimpleCommand

  def initialize(name:, password:)
    @name = name
    @password = password
    
  end

  def call
    jwtoken = JsonWebToken.encode(user_id: user.id) if user
  end

  private

  attr_accessor :name, :password

  def user
    user = User.find_by(name: name)
    
    return user if user && user.password==(password)
    errors.add :user_session, 'Invalid credentials'
  end
end
