class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      redirect_to api_user_url(@user)
    else
      render json: { password: ['invalid username or password'] }, status: 401
    end
  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: {}, status: 404
    end
  end

end
