```ruby
def hello_world?
  request.domain == 'tiste.io'
end

describe '#hello_world?' do
  when 'i see this test' do
    it { should be_true }
  end
end
```
