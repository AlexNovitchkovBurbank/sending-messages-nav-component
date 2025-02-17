import { cloudfront_domain_id, cognito_domain, cognito_app_client_id } from "../env";

export function SignIn() {
    const redirectUri = `https://${cloudfront_domain_id}.cloudfront.net/main/index.html`;
    const SignInUrl = `https://${cognito_domain}.auth.us-west-2.amazoncognito.com/login?response_type=code&client_id=${cognito_app_client_id}&redirect_uri=${redirectUri}`;

    return <a href={SignInUrl}>Log in</a>
}