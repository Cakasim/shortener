
/**
 * The main class of the service.
 * 
 * @author Fabian Böttcher <me@cakasim.de>
 * @since 0.1.0
 */
export class Application
{
    /**
     * Holds the singleton instance of the app.
     */
    protected static _instance?: Application;

    /**
     * Bootstraps the app.
     */
    public static async bootstrap(): Promise<Application>
    {
        return Application._instance instanceof Application
            ? Application._instance
            : new Application();
    }

    /**
     * Constructs the app instance.
     */
    protected constructor()
    {
        Application._instance = this;
    }

    /**
     * Returns the app instance.
     * 
     * @throws An error if the app was not bootstrapped before.
     */
    public static get instance(): Application
    {
        if (Application._instance instanceof Application) {
            return Application._instance;
        }

        throw new Error('Cannot access undefined app instance, bootstrap app first.');
    }

    /**
     * Runs the app.
     */
    public async run(): Promise<void>
    {
    }

    /**
     * Shutdowns the app.
     */
    public async shutdown(): Promise<void>
    {
        Application._instance = undefined;
    }
}
