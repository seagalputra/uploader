class UsersController < ApplicationController
  def index
    @user = User.new
  end

  private
  def user_params
    params.require(:user).permit(:usernmae)
  end
end
