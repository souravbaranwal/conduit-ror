# frozen_string_literal: true

class PostsController < ApplicationController
  def index
    posts = Post.all
    render status: :ok, json: { posts: posts }
  end
end
