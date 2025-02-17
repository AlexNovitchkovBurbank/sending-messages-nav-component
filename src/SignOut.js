import { cloudfront_domain_id, cognito_domain, cognito_app_client_id } from "../env";

export function SignOut() {

    const redirectUri = `https://${cloudfront_domain_id}.cloudfront.net/main/index.html`;
    const SignOutUrl = `https://${cognito_domain}.auth.us-west-2.amazoncognito.com/logout?client_id=${cognito_app_client_id}&logout_uri=${redirectUri}`;

    return <a href={SignOutUrl}>Log out</a>
}