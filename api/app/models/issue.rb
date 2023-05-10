class Issue < ApplicationRecord
    has_many :comments
    belongs_to :identified_by, class_name: "User" , foreign_key: "user_identified"
    belongs_to :user_assigned, class_name: "User" , foreign_key: "assigned_to"
    belongs_to :project

    enum :status, [ :OPEN, :IN_PROGRESS, :RESOLVED, :CLOSED ]
    enum :priority, [ :LOW, :MEDIUM, :HIGH ]

    validates :title, presence: true
    validates :description, presence: true
    validates :summary, presence: true
    validates :project_id, presence: true
end
