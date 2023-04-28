class CreateIssues < ActiveRecord::Migration[7.0]
  def change
    create_table :issues do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :summary, null: false
      t.integer :status, null: false, default: 0
      t.integer :priority, null: false, default: 0
      t.integer :assigned_to , foreign_key: true
      t.text :resolution_summary
      t.text :issue_steps, null: false
      t.date :resolution_date
      t.integer :user_identified
      t.belongs_to :project, null: false, foreign_key: true

      t.timestamps
    end
  end
end
