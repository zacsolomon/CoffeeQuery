class HomesController < ApplicationController
  skip_before_action :authenticate_user!, :only => :index 

  before_action :set_home, only: [:show, :edit, :update, :destroy]

  # GET /homes
  # GET /homes.json

  def index
  end

  end
