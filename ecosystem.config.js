module.exports = {
  apps: [{
    name: 'emotai-quiz',
    script: '.output/server/index.mjs',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000,
      NUXT_HOST: '0.0.0.0'
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    log_file: '/var/log/emotai-quiz/combined.log',
    out_file: '/var/log/emotai-quiz/out.log',
    error_file: '/var/log/emotai-quiz/error.log',
    log_date_format: 'YYYY-MM-DD HH:mm Z',
    max_memory_restart: '1G',
    node_args: '--max-old-space-size=1024'
  }]
}