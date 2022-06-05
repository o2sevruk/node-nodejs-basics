export const parseArgs = () => {
  let rssArgs = '';

  process.argv.map((arg, i) => {
    if (arg.includes('--')) {
      rssArgs += `${arg.slice(2)} is ${(process.argv[i + 1] && process.argv[i + 1].includes('--')) ? null : (process.argv[i + 1] || null)}, `;
    }
  });

  console.log(rssArgs);
};

parseArgs();