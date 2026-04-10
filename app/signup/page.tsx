'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Signup() {
  return (
    <div className="auth-page">
      <Link href="/" className="auth-page__logo">
        <Image 
          src="/assets/images/logos/radiantlogowhite.png"
          alt="Radiant Collective"
          width={140}
          height={40}
          priority
        />
      </Link>
      <div className="auth-container">
        <div className="auth-header">
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
            className="auth-form__button auth-form__button--secondary auth-form__button--linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
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
