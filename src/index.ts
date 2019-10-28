import { Application } from './app';

/**
 * Defines the options for the run helper.
 * 
 * @author Fabian Böttcher <me@cakasim.de>
 * @since 0.1.0
 */
interface RunOptions
{
    port: number;
}

/**
 * Helper method to bootstrap and run the app.
 * 
 * @param options The options to run the app with.
 * 
 * @author Fabian Böttcher <me@cakasim.de>
 * @since 0.1.0
 */
export async function run(options: RunOptions): Promise<void>
{
    const app = await Application.bootstrap();
    return app.run();
}
