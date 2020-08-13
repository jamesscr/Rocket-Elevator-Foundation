require 'http'
require 'json'

module ElevatorMedia
    class Streamer
        def initialize
        end

        def self.getContent(tag="elevator")
            #randomimg = HTTP.get("https://source.unsplash.com/1600x900/?#{tag}")
            #html = "<div><img src=\"#{JSON.parse(randomimg)['url']}\"/></div>"
            html = "<div><img src=\"https://source.unsplash.com/1600x900/?#{tag}\"/></div>"
            return html
        end
    end
end