# frozen_string_literal: true

class SeedSlugValueForExistingPosts < ActiveRecord::Migration[6.1]
  def up
    Post.find_each do |post|
      post.send(:set_slug)
      post.save(validate: false)
    end
 end

  def down
    Post.find_each do |post|
      post.update(slug: nil)
      post.save(validate: false)
    end
  end
end
