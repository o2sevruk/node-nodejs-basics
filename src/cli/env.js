export const parseEnv = () => {
  let rssArgs = '';

  for (let envKey in process.env) {
    if (envKey.includes('RSS_')) {
      rssArgs += `${envKey}=${process.env[envKey]}; `;
    }
  }

  console.log(rssArgs);
};

parseEnv();