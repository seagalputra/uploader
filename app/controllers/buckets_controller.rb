class BucketsController < ApplicationController
  def create
    @bucket = Bucket.new(bucket_params)
    @bucket.save

    redirect_to "/buckets/#{@bucket.id}"
  end

  def show
    @bucket = Bucket.find_by(id: params[:id])
  end

  private
  def bucket_params
    params.require(:bucket).permit(:filename, :size, :file_url)
  end
end
