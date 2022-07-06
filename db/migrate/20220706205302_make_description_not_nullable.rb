# frozen_string_literal: true

class MakeDescriptionNotNullable < ActiveRecord::Migration[6.1]
  def change
    change_column_null :posts, :description, false
  end
end
