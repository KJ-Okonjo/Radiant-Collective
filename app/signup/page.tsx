'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Signup() {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <Link href="/" className="auth-header__logo">
            <Image 
              src="/assets/images/logos/radiantlogogold.png"
              alt="Radiant Collective"
              width={160}
              height={46}
              priority
            />
          </Link>
          <h1 className="auth-header__title">Join Radiant Collective</h1>
          <p className="auth-header__subtitle">Create your account</p>
        </div>

        <form className="auth-form">
          <div className="auth-form__group">
            <label className="auth-form__label" htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              className="auth-form__input"
              placeholder="Your full name"
              required
            />
          </div>

          <div className="auth-form__group">
            <label className="auth-form__label" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="auth-form__input"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="auth-form__group">
            <label className="auth-form__label" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="auth-form__input"
              placeholder="Create a password"
              required
            />
          </div>

          <div className="auth-form__group">
            <label className="auth-form__label" htmlFor="linkedin">LinkedIn Username</label>
            <input
              type="text"
              id="linkedin"
              className="auth-form__input"
              placeholder="linkedin.com/in/yourname"
              required
            />
          </div>

          <div className="auth-form__group">
            <label className="auth-form__label" htmlFor="age">Age</label>
            <select id="age" className="auth-form__select" required>
              <option value="">Select your age range</option>
              <option value="18-24">18–24</option>
              <option value="25-39">25–39</option>
              <option value="40-54">40–54</option>
              <option value="55-64">55–64</option>
              <option value="65+">65+</option>
            </select>
          </div>

          <button type="submit" className="auth-form__button">
            Sign Up
          </button>

          <div className="auth-divider">
            <span className="auth-divider__text">or</span>
          </div>

          <a
            href="https://www.linkedin.com/uas/login?session_redirect=%2Foauth%2Fv2%2Flogin-success%3Fapp_id%3D227803585%26auth_type%3DAC%26flow%3D%257B%2522state%2522%253A%2522eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm92aWRlciI6ImxpbmtlZGluIiwiYXBwSWQiOiJhcHBfY21lc3AxdXl2MDA5eTB3dG1kaThsZnAyMiIsImN1c3RvbUZpZWxkcyI6e30sInBsYW5zIjpbXSwibW9kZSI6IkxJVkUiLCJhY3Rpb24iOiJMT0dJTiIsImFsbG93U2lnbnVwIjp0cnVlLCJjb252ZXJzaW9uRGF0YSI6e30sImlhdCI6MTc3NTg1NTIzNn0.S1KtzpnRpSHnFngR8R_290w6BQmIuQTIfmqZ7jQcutg%2522%252C%2522creationTime%2522%253A1775855237651%252C%2522scope%2522%253A%2522openid%2Bemail%2Bprofile%2522%252C%2522appId%2522%253A227803585%252C%2522authorizationType%2522%253A%2522OAUTH2_AUTHORIZATION_CODE%2522%252C%2522redirectUri%2522%253A%2522https%253A%252F%252Fclient.memberstack.com%252Fauth%252Fcallback%2522%252C%2522currentStage%2522%253A%2522LOGIN_SUCCESS%2522%252C%2522currentSubStage%2522%253A0%252C%2522authFlowName%2522%253A%2522generic-permission-list%2522%257D&fromSignIn=1&trk=oauth&cancel_redirect=%2Foauth%2Fv2%2Flogin-cancel%3Fapp_id%3D227803585%26auth_type%3DAC%26flow%3D%257B%2522state%2522%253A%2522eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm92aWRlciI6ImxpbmtlZGluIiwiYXBwSWQiOiJhcHBfY21lc3AxdXl2MDA5eTB3dG1kaThsZnAyMiIsImN1c3RvbUZpZWxkcyI6e30sInBsYW5zIjpbXSwibW9kZSI6IkxJVkUiLCJhY3Rpb24iOiJMT0dJTiIsImFsbG93U2lnbnVwIjp0cnVlLCJjb252ZXJzaW9uRGF0YSI6e30sImlhdCI6MTc3NTg1NTIzNn0.S1KtzpnRpSHnFngR8R_290w6BQmIuQTIfmqZ7jQcutg%2522%252C%2522creationTime%2522%253A1775855237651%252C%2522scope%2522%253A%2522openid%2Bemail%2Bprofile%2522%252C%2522appId%2522%253A227803585%252C%2522authorizationType%2522%253A%2522OAUTH2_AUTHORIZATION_CODE%2522%252C%2522redirectUri%2522%253A%2522https%253A%252F%252Fclient.memberstack.com%252Fauth%252Fcallback%2522%252C%2522currentStage%2522%253A%2522LOGIN_SUCCESS%2522%252C%2522currentSubStage%2522%253A0%252C%2522authFlowName%2522%253A%2522generic-permission-list%2522%257D"
            className="auth-form__button auth-form__button--secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Continue with LinkedIn
          </a>
        </form>

        <div className="auth-footer">
          Already have an account?{' '}
          <Link href="/login" className="auth-footer__link">
            Log in
          </Link>
        </div>
      </div>
    </div>
  )
}
