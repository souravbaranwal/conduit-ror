class MakeTitleNotNullable < ActiveRecord::Migration[6.1]
  def change
    change_column_null :posts, :title, false
  end
end
