# frozen_string_literal: true

class PostsController < ApplicationController
  def index
    posts = Post.all
    render status: :ok, json: { posts: posts }
  end

  def create
    post = Post.new(post_params)
    post.save!
    respond_with_success(t("successfully_created"))
  end

  def show
    post = Post.find_by!(slug: params[:slug])
    respond_with_json({ post: post })
 end

  private

    def post_params
      params.require(:post).permit(:title, :description)
    end
end
