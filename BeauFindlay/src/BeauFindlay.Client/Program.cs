using BeauFindlay.Client;
using BeauFindlay.Client.Components.Typewriter;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

string apiBase;
if (builder.HostEnvironment.IsDevelopment())
{
    apiBase = builder.Configuration["ApiBase"]
              ?? throw new ArgumentException("API base address not found in config.");
}
else
{
    apiBase = builder.HostEnvironment.BaseAddress;
}

builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(apiBase) });

builder.Services.AddSingleton<ITypewriterNotificationService, TypewriterNotificationService>();

await builder.Build().RunAsync();