class RenameColumnTextToCommentInComment < ActiveRecord::Migration[7.0]
  def change
    rename_column :comments, :text, :comment
  end
end
