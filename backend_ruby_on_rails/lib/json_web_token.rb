class JsonWebToken
  def self.encode(payload, exp = 12.hours.from_now)
    payload[:exp] = exp.to_i

    JWT.encode(payload, Rails.application.credentials.secret_key_base)
  end

  def self.decode(token)

    begin
      body = JWT.decode(token, Rails.application.credentials.secret_key_base)
    rescue
      nil
    end
  end
end