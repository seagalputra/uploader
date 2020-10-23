class AddFileUrlToBucket < ActiveRecord::Migration[6.0]
  def change
    add_column :buckets, :file_url, :string
  end
end
