class BucketsController < ApplicationController
  def index
    # Get url of uploaded image
    # @bucket = Bucket.find(id)
    # url_for(@bucket.images[0])
  end

  def create
    @bucket = Bucket.new(bucket_params)
    @bucket.save
  end

  def show
  end

  private
  def bucket_params
    params.require(:bucket).permit(:filename, :size, :images)
  end
end
