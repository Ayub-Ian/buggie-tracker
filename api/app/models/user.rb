class User < ApplicationRecord
    has_secure_password
    # mount_uploader :avatar, AvatarUploader
    validates :name, presence: true
    validates :email, presence: true, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :username, presence: true, uniqueness: true
    validates :password,
              length: { minimum: 8 },
              if: -> { new_record? || !password.nil? }
end
