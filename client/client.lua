local function toggleNuiFrame(shouldShow)
  SetNuiFocus(shouldShow, shouldShow)
  SendReactMessage('setVisible', shouldShow)
end

RegisterCommand('show-nui', function()
    toggleNuiFrame(true)
end)

RegisterNUICallback('hideFrame', function(_, cb)
    toggleNuiFrame(false)
end)