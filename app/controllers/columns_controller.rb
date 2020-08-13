class ColumnsController < ApplicationController

    def get_columns_by_battery
        @columns = Column.where("battery_id = ?", params[:batteryID])
        respond_to do |format|
            format.json { render :json => @columns }
        end
    end

end