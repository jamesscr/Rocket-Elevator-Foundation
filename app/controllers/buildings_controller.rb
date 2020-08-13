class BuildingsController < ApplicationController

    def get_buildings_by_customer
        @buildings = Building.where("customer_id = ?", params[:customerID])
        respond_to do |format|
            format.json { render :json => @buildings }
        end
    end

end