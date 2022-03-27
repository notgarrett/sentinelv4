declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BOTTOKEN: string
      GUILDID: string
      environment: 'dev' | 'prod' | 'debug'
      MONGOURI: string | null
    }
  }
}

export {}
