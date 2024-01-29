/**
 * 这里是获取数据的函数，主要包括所有一开始就要展示的
 */
//阿里云路径
const aliyunBasePath = 'https://cellmark-1319913122.cos.ap-beijing.myqcloud.com'

/**
 * 获取 dataType 的可选项
 * @param organ 器官名
 * @returns {[{label: string, value: string}]}
 */
function getDataTypes(organ) {
  let dataTypes = [
    {
      label: 'snRNA-seq',
      value: 'snRNA-seq'
    },
  ]

  //如果器官是软骨，那么有两类
  if(organ === 'cartilage') {
    dataTypes.push({
      label: 'scRNA-seq',
      value: 'scRNA-seq'
    })
  }

  return dataTypes
}

/**
 * 获取 traits 可选项
 * @param organ 器官名
 * @returns {[{label: string, value: string}]}
 */
function getTraits(organ) {
  let traits = [{label: 'Control', value: 'Control'}]
  //如果器官是软骨，那么有两类
  if(organ === 'cartilage') {
    traits.push({label: 'OA', value: 'OA'})
  }

  return traits
}

/**
 * TODO 获取 groups 可选项
 * @param organ
 * @returns {[{label: string, value: string}]}
 */
function getGroups(organ) {
  if(fileDirectoryInstructions[organ] === undefined) {
    return []
  }
  return fileDirectoryInstructions[organ].groups
}

/**
 * 获取 genes 可选项
 * @param organ 组织
 * @param dataType 数据类型
 * @param trait
 * @returns {[{label: string, value: string}]}
 */
async function getGenes(organ, dataType, trait) {
  if(fileDirectoryInstructions[organ] === undefined) {
    return []
  }
  // 根据器官名拼接对应的路径
  let url = aliyunBasePath + fileDirectoryInstructions[organ][dataType][trait].genes
  let response = await axios.get(url)
  let genes = response.data
  return genes.map(obj => obj.value)
}

/**
 *  获取话 JS 的数据链接
 * @param organ
 * @param dataType
 * @param trait
 * @param group
 * @returns {string}
 */
function getUmapDataUrl(organ, dataType, trait, group) {
  // console.log(aliyunBasePath + fileDirectoryInstructions[organ][dataType][trait][group].UMAPJS)
  return aliyunBasePath + fileDirectoryInstructions[organ][dataType][trait][group].UMAPJS
}

/**
 * 获取 dotplot 图的链接
 * @param organ
 * @param dataType
 * @param trait
 * @param group
 * @returns {string}
 */
function getImgUrlTwo(organ, dataType, trait, group) {
  return aliyunBasePath + fileDirectoryInstructions[organ][dataType][trait][group].dotplotImg
}

/**
 * 获取 feature 图的链接
 * @param organ
 * @param dataType
 * @param trait
 * @param group
 * @param gene
 * @returns {string}
 */
function getImgUrlThree(organ, dataType, trait, group, gene) {
  // console.log(aliyunBasePath + fileDirectoryInstructions[organ][dataType][trait][group].featureImg + gene + '.png')
  return aliyunBasePath + fileDirectoryInstructions[organ][dataType][trait][group].featureImg + gene + '.png'
}

/**
 * 获取 violin 图的链接
 * @param organ
 * @param dataType
 * @param trait
 * @param group
 * @param gene
 * @returns {string}
 */
function getImgUrlFour(organ, dataType, trait, group, gene) {
  // console.log(aliyunBasePath + fileDirectoryInstructions[organ][dataType][trait][group].violinImg + gene + '.png')
  return aliyunBasePath + fileDirectoryInstructions[organ][dataType][trait][group].violinImg + gene + '.png'
}
