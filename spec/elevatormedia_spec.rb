require 'rspec'
require 'ElevatorMedia/elevatormedia'

describe ElevatorMedia::Streamer do
    describe 'getContent' do
        context 'tests for returned content' do
            
            it 'returns a string' do
                expect(described_class.getContent).to be_an_instance_of(String)
            end
            
            it 'returns valid HTML' do
                expect(described_class.getContent.start_with?("<div>")).to be(true)
                expect(described_class.getContent.end_with?("</div>")).to be(true)
            end

        end

        context 'override of default tag' do

            it 'sets query string to argument' do
                expect(described_class.getContent("flowers").should match("<div><img src=\"https://source.unsplash.com/1600x900/?flowers\"/></div>"))
            end
        end
    end
end