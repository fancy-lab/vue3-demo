const gitRepoInfo = require('git-repo-info')();

/**
 * @Author Ken
 * @CreateDate 2019-10-15 10:46
 * @LastUpdateDate 2019-10-15 10:46
 * @desc 设计原则: 当最新提交有tag, 则显示tag; 若在打tag后又有新的提交, 则显示commit hash 前8位
 */
let version = gitRepoInfo.tag || '';

if (!version && gitRepoInfo.sha) {
  version = gitRepoInfo.sha.substring(0, 8);
}

module.exports = version;
