using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(GulpAndStuff.Startup))]
namespace GulpAndStuff
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
