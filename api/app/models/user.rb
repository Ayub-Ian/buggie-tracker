class User < ApplicationRecord
    has_secure_password

    has_many :project_users, dependent: :destroy
    has_many :projects, through: :project_users, dependent: :destroy
    has_many :assigned_issues, :class_name => "Issue", :foreign_key => "assigned_to", dependent: :destroy
    has_many :identified_issues, :class_name => "Issue", :foreign_key => "user_identified", dependent: :destroy
  
    # mount_uploader :avatar, AvatarUploader
    validates :name, presence: true
    validates :email, presence: true, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :username, presence: true, uniqueness: true
    validates :password,
              length: { minimum: 8 },
              if: -> { new_record? || !password.nil? }
end
