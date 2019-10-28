import { Application } from './Application';

export { Application } from './Application';

/**
 * Common helper to access the app instance.
 * 
 * @author Fabian Böttcher <me@cakasim.de>
 * @since 0.1.0
 */
export function app(): Application
{
    return Application.instance;
}
