class Project < ApplicationRecord
    has_many :project_users
    has_many :members, through: :project_users, source: :user
    has_many :issues
    
    validates :name, presence: true
    validates :description, presence: true
    validates :start_date, presence: true

end
