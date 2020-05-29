-- This file will be the bottom of the addon file and the setfenv scope finishes here, after the end, is back to file scope

end

local function TryLoading()
    C_Timer.After(1, function () 
        if setfenv ~= nil and __LB__ ~= nil then
            Load()
        else
            TryLoading()
        end
    end)
end

TryLoading()