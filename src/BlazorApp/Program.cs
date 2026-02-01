using BlazorApp.Components;
using OpenTelemetry.Metrics;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddRazorComponents();

builder.Services.AddOpenTelemetry()
	.WithMetrics(metrics =>
	{
		metrics.AddAspNetCoreInstrumentation();
		metrics.AddPrometheusExporter();
	});


var app = builder.Build();

app.MapGet("/health", () => Results.Ok(new
{
	status = "healthy",
	timestamp = DateTime.UtcNow
}));

app.MapPrometheusScrapingEndpoint();

if (!app.Environment.IsDevelopment())
{
	app.UseExceptionHandler("/Error", true);
	app.UseHsts();
}

app.UseStatusCodePagesWithReExecute("/not-found", createScopeForStatusCodePages: true);
app.UseHttpsRedirection();

app.UseAntiforgery();

app.MapStaticAssets();
app.MapRazorComponents<App>();

app.Run();