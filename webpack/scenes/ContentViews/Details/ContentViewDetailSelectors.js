import { STATUS } from 'foremanReact/constants';
import {
  selectAPIError,
  selectAPIResponse,
  selectAPIStatus,
} from 'foremanReact/redux/API/APISelectors';
import { pollTaskKey } from '../../Tasks/helpers';
import {
  ACTIVATION_KEY_KEY,
  ADD_CONTENT_VIEW_FILTER_RULE,
  bulkRemoveVersionKey,
  CREATE_CONTENT_VIEW_FILTER_KEY,
  cvAddComponentKey,
  cvDetailsComponentKey,
  cvDetailsFiltersKey,
  cvDetailsHistoryKey,
  cvDetailsKey,
  cvDetailsRepoKey,
  cvDetailsVersionKey,
  cvFilterDetailsKey,
  cvFilterErratumIDKey,
  cvFilterModuleStreamKey,
  cvFilterPackageGroupsKey,
  cvFilterRepoKey,
  cvFilterRulesKey,
  cvRemoveComponentKey,
  cvRemoveVersionKey,
  cvVersionDetailsKey,
  DEB_PACKAGES_CONTENT,
  DOCKER_TAGS_CONTENT,
  ERRATA_CONTENT,
  FILE_CONTENT,
  generatedContentKey,
  HOSTS_KEY,
  MODULE_STREAMS_CONTENT,
  REPOSITORY_CONTENT,
  REPOSITORY_TYPES,
  RPM_PACKAGE_GROUPS_CONTENT,
  RPM_PACKAGES_CONTENT,
  cvRPMPackagesCompareKey,
  cvPackageGroupsCompareKey,
  cvErrataCompareKey,
  cvModuleStreamsCompareKey,
  cvDockerTagsCompareKey,
  cvDebPackagesCompareKey,
  filesCompareKey,
  genericContentCompareKey, cvRepositoriesCompareKey,
} from '../ContentViewsConstants';

export const selectCVDetails = (state, cvId) =>
  selectAPIResponse(state, cvDetailsKey(cvId)) || {};

export const selectCVDetailStatus =
  (state, cvId) => selectAPIStatus(state, cvDetailsKey(cvId)) || STATUS.PENDING;

export const selectCVDetailError =
  (state, cvId) => selectAPIError(state, cvDetailsKey(cvId));

export const selectCVRepos = (state, cvId) =>
  selectAPIResponse(state, cvDetailsRepoKey(cvId)) || {};

export const selectCVReposStatus = (state, cvId) =>
  selectAPIStatus(state, cvDetailsRepoKey(cvId)) || STATUS.PENDING;

export const selectCVReposError = (state, cvId) =>
  selectAPIError(state, cvDetailsRepoKey(cvId));

export const selectRepoTypes = state =>
  selectAPIResponse(state, REPOSITORY_TYPES) || {};

export const selectRepoTypesStatus = state =>
  selectAPIStatus(state, REPOSITORY_TYPES) || STATUS.PENDING;

export const selectCVFilters = (state, cvId) =>
  selectAPIResponse(state, cvDetailsFiltersKey(cvId)) || {};

export const selectCVFiltersStatus = (state, cvId) =>
  selectAPIStatus(state, cvDetailsFiltersKey(cvId)) || STATUS.PENDING;

export const selectCVFiltersError = (state, cvId) =>
  selectAPIError(state, cvDetailsFiltersKey(cvId));

export const selectCVFilterDetails = (state, cvId, filterId) =>
  selectAPIResponse(state, cvFilterDetailsKey(cvId, filterId)) || {};

export const selectCVFilterDetailStatus = (state, cvId, filterId) =>
  selectAPIStatus(state, cvFilterDetailsKey(cvId, filterId)) || STATUS.PENDING;

export const selectCVFilterDetailError = (state, cvId, filterId) =>
  selectAPIError(state, cvFilterDetailsKey(cvId, filterId));

export const selectCVFilterRepos = (state, filterId) =>
  selectAPIResponse(state, cvFilterRepoKey(filterId)) || {};

export const selectCVFilterReposStatus = (state, filterId) =>
  selectAPIStatus(state, cvFilterRepoKey(filterId)) || STATUS.PENDING;

export const selectCVFilterReposError = (state, filterId) =>
  selectAPIError(state, cvFilterRepoKey(filterId));

export const selectCVFilterPackageGroups = (state, cvId, filterId) =>
  selectAPIResponse(state, cvFilterPackageGroupsKey(cvId, filterId));

export const selectCVFilterPackageGroupStatus = (state, cvId, filterId) =>
  selectAPIStatus(state, cvFilterPackageGroupsKey(cvId, filterId)) || STATUS.PENDING;

export const selectCVFilterPackageGroupError = (state, cvId, filterId) =>
  selectAPIError(state, cvFilterPackageGroupsKey(cvId, filterId));

export const selectCVFilterModuleStream = (state, cvId, filterId) =>
  selectAPIResponse(state, cvFilterModuleStreamKey(cvId, filterId));

export const selectCVFilterModuleStreamStatus = (state, cvId, filterId) =>
  selectAPIStatus(state, cvFilterModuleStreamKey(cvId, filterId)) || STATUS.PENDING;

export const selectCVFilterModuleStreamError = (state, cvId, filterId) =>
  selectAPIError(state, cvFilterModuleStreamKey(cvId, filterId));

export const selectCVFilterErratumID = (state, cvId, filterId) =>
  selectAPIResponse(state, cvFilterErratumIDKey(cvId, filterId));

export const selectCVFilterErratumIDStatus = (state, cvId, filterId) =>
  selectAPIStatus(state, cvFilterErratumIDKey(cvId, filterId)) || STATUS.PENDING;

export const selectCVFilterErratumIDError = (state, cvId, filterId) =>
  selectAPIError(state, cvFilterErratumIDKey(cvId, filterId));

export const selectCVHistories = (state, cvId) =>
  selectAPIResponse(state, cvDetailsHistoryKey(cvId)) || {};

export const selectCVHistoriesStatus = (state, cvId) =>
  selectAPIStatus(state, cvDetailsHistoryKey(cvId)) || STATUS.PENDING;

export const selectCVHistoriesError = (state, cvId) =>
  selectAPIError(state, cvDetailsHistoryKey(cvId));

export const selectRepositoriesComparison = (state, versionOne, versionTwo, viewBy) =>
  selectAPIResponse(state, cvRepositoriesCompareKey(versionOne, versionTwo, viewBy)) || {};

export const selectRepositoriesComparisonStatus = (state, versionOne, versionTwo, viewBy) =>
  selectAPIStatus(state, cvRepositoriesCompareKey(versionOne, versionTwo, viewBy)) ||
  STATUS.PENDING;

export const selectRepositoriesComparisonError = (state, versionOne, versionTwo, viewBy) =>
  selectAPIError(state, cvRepositoriesCompareKey(versionOne, versionTwo, viewBy));

export const selectRPMPackagesComparison = (state, versionOne, versionTwo, viewBy) =>
  selectAPIResponse(state, cvRPMPackagesCompareKey(versionOne, versionTwo, viewBy)) || {};

export const selectRPMPackagesComparisonStatus = (state, versionOne, versionTwo, viewBy) =>
  selectAPIStatus(state, cvRPMPackagesCompareKey(versionOne, versionTwo, viewBy)) || STATUS.PENDING;

export const selectRPMPackagesComparisonError = (state, versionOne, versionTwo, viewBy) =>
  selectAPIError(state, cvRPMPackagesCompareKey(versionOne, versionTwo, viewBy));

export const selectErrataComparison = (state, versionOne, versionTwo, viewBy) =>
  selectAPIResponse(state, cvErrataCompareKey(versionOne, versionTwo, viewBy)) || {};

export const selectErrataComparisonStatus = (state, versionOne, versionTwo, viewBy) =>
  selectAPIStatus(state, cvErrataCompareKey(versionOne, versionTwo, viewBy)) || STATUS.PENDING;

export const selectErrataComparisonError = (state, versionOne, versionTwo, viewBy) =>
  selectAPIError(state, cvErrataCompareKey(versionOne, versionTwo, viewBy));

export const selectPackageGroupsComparison = (state, versionOne, versionTwo, viewBy) =>
  selectAPIResponse(state, cvPackageGroupsCompareKey(versionOne, versionTwo, viewBy)) || {};

export const selectPackageGroupsComparisonStatus = (state, versionOne, versionTwo, viewBy) =>
  selectAPIStatus(state, cvPackageGroupsCompareKey(versionOne, versionTwo, viewBy))
    || STATUS.PENDING;

export const selectPackageGroupsComparisonError = (state, versionOne, versionTwo, viewBy) =>
  selectAPIError(state, cvPackageGroupsCompareKey(versionOne, versionTwo, viewBy));

export const selectModuleStreamsComparison = (state, versionOne, versionTwo, viewBy) =>
  selectAPIResponse(state, cvModuleStreamsCompareKey(versionOne, versionTwo, viewBy)) || {};

export const selectModuleStreamsComparisonStatus = (state, versionOne, versionTwo, viewBy) =>
  selectAPIStatus(state, cvModuleStreamsCompareKey(versionOne, versionTwo, viewBy))
    || STATUS.PENDING;

export const selectModuleStreamsComparisonError = (state, versionOne, versionTwo, viewBy) =>
  selectAPIError(state, cvModuleStreamsCompareKey(versionOne, versionTwo, viewBy));

export const selectDockerTagsComparison = (state, versionOne, versionTwo, viewBy) =>
  selectAPIResponse(state, cvDockerTagsCompareKey(versionOne, versionTwo, viewBy)) || {};

export const selectDockerTagsComparisonStatus = (state, versionOne, versionTwo, viewBy) =>
  selectAPIStatus(state, cvDockerTagsCompareKey(versionOne, versionTwo, viewBy)) || STATUS.PENDING;

export const selectDockerTagsComparisonError = (state, versionOne, versionTwo, viewBy) =>
  selectAPIError(state, cvDockerTagsCompareKey(versionOne, versionTwo, viewBy));

export const selectDebPackagesComparison = (state, versionOne, versionTwo, viewBy) =>
  selectAPIResponse(state, cvDebPackagesCompareKey(versionOne, versionTwo, viewBy)) || {};

export const selectDebPackagesComparisonStatus = (state, versionOne, versionTwo, viewBy) =>
  selectAPIStatus(state, cvDebPackagesCompareKey(versionOne, versionTwo, viewBy)) || STATUS.PENDING;

export const selectDebPackagesComparisonError = (state, versionOne, versionTwo, viewBy) =>
  selectAPIError(state, cvDebPackagesCompareKey(versionOne, versionTwo, viewBy));

export const selectFilesComparison = (state, versionOne, versionTwo, viewBy) =>
  selectAPIResponse(state, filesCompareKey(versionOne, versionTwo, viewBy)) || {};

export const selectFilesComparisonStatus = (state, versionOne, versionTwo, viewBy) =>
  selectAPIStatus(state, filesCompareKey(versionOne, versionTwo, viewBy)) || STATUS.PENDING;

export const selectFilesComparisonError = (state, versionOne, versionTwo, viewBy) =>
  selectAPIError(state, filesCompareKey(versionOne, versionTwo, viewBy));

export const selectGenericContentComparison =
  (state, versionOne, versionTwo, pluralLabel, viewBy) =>
    selectAPIResponse(
      state,
      genericContentCompareKey(pluralLabel, versionOne, versionTwo, viewBy),
    ) || {};

export const selectGenericContentComparisonStatus =
  (state, versionOne, versionTwo, pluralLabel, viewBy) =>
    selectAPIStatus(state, genericContentCompareKey(pluralLabel, versionOne, versionTwo, viewBy))
    || STATUS.PENDING;

export const selectGenericContentComparisonError =
  (state, versionOne, versionTwo, pluralLabel, viewBy) =>
    selectAPIError(state, genericContentCompareKey(pluralLabel, versionOne, versionTwo, viewBy));

export const selectCVFilterRules = (state, filterId) =>
  selectAPIResponse(state, cvFilterRulesKey(filterId));

export const selectCVFilterRulesStatus = (state, filterId) =>
  selectAPIStatus(state, cvFilterRulesKey(filterId)) || STATUS.PENDING;

export const selectContent = (pluralLabel, state) =>
  selectAPIResponse(state, generatedContentKey(pluralLabel));

export const selectContentStatus = (pluralLabel, state) =>
  selectAPIStatus(state, generatedContentKey(pluralLabel)) || STATUS.PENDING;

export const selectDockerTags = state =>
  selectAPIResponse(state, DOCKER_TAGS_CONTENT);

export const selectDockerTagsStatus = state =>
  selectAPIStatus(state, DOCKER_TAGS_CONTENT) || STATUS.PENDING;

export const selectRepositories = state =>
  selectAPIResponse(state, REPOSITORY_CONTENT);

export const selectRepositoriesStatus = state =>
  selectAPIStatus(state, REPOSITORY_CONTENT) || STATUS.PENDING;

export const selectDebPackages = state =>
  selectAPIResponse(state, DEB_PACKAGES_CONTENT);

export const selectDebPackagesStatus = state =>
  selectAPIStatus(state, DEB_PACKAGES_CONTENT) || STATUS.PENDING;

export const selectModuleStreams = state =>
  selectAPIResponse(state, MODULE_STREAMS_CONTENT);

export const selectModuleStreamsStatus = state =>
  selectAPIStatus(state, MODULE_STREAMS_CONTENT) || STATUS.PENDING;

export const selectRPMPackageGroups = state =>
  selectAPIResponse(state, RPM_PACKAGE_GROUPS_CONTENT);

export const selectRPMPackageGroupsStatus = state =>
  selectAPIStatus(state, RPM_PACKAGE_GROUPS_CONTENT) || STATUS.PENDING;

export const selectRPMPackages = state =>
  selectAPIResponse(state, RPM_PACKAGES_CONTENT);

export const selectRPMPackagesStatus = state =>
  selectAPIStatus(state, RPM_PACKAGES_CONTENT) || STATUS.PENDING;

export const selectFiles = state =>
  selectAPIResponse(state, FILE_CONTENT);

export const selectFilesStatus = state =>
  selectAPIStatus(state, FILE_CONTENT) || STATUS.PENDING;

export const selectErrata = state =>
  selectAPIResponse(state, ERRATA_CONTENT);

export const selectErrataStatus = state =>
  selectAPIStatus(state, ERRATA_CONTENT) || STATUS.PENDING;

export const selectCVComponents = (state, cvId) =>
  selectAPIResponse(state, cvDetailsComponentKey(cvId)) || {};

export const selectCVComponentsStatus = (state, cvId) =>
  selectAPIStatus(state, cvDetailsComponentKey(cvId)) || STATUS.PENDING;

export const selectCVComponentsError = (state, cvId) =>
  selectAPIError(state, cvDetailsComponentKey(cvId));

export const selectCVVersions = (state, cvId) =>
  selectAPIResponse(state, cvDetailsVersionKey(cvId)) || {};

export const selectCVVersionsStatus = (state, cvId) =>
  selectAPIStatus(state, cvDetailsVersionKey(cvId)) || STATUS.PENDING;

export const selectCVVersionsError = (state, cvId) =>
  selectAPIError(state, cvDetailsVersionKey(cvId));

export const selectCVVersionDetails = (state, versionId, cvId) =>
  selectAPIResponse(state, cvVersionDetailsKey(versionId, cvId)) || {};

export const selectCVVersionDetailsStatus = (state, versionId, cvId) =>
  selectAPIStatus(state, cvVersionDetailsKey(versionId, cvId)) || STATUS.PENDING;

export const selectCVVersionDetailsError = (state, versionId, cvId) =>
  selectAPIError(state, cvVersionDetailsKey(versionId, cvId));

export const selectTaskPoll = (state, key) =>
  selectAPIResponse(state, pollTaskKey(key)) || {};

export const selectTaskPollStatus = (state, key) =>
  selectAPIStatus(state, pollTaskKey(key)) || STATUS.PENDING;

export const selectCVComponentAdd = (state, cvId) =>
  selectAPIResponse(state, cvAddComponentKey(cvId));

export const selectCVComponentAddStatus = (state, cvId) =>
  selectAPIStatus(state, cvAddComponentKey(cvId)) || STATUS.PENDING;

export const selectCVComponentAddError = (state, cvId) =>
  selectAPIError(state, cvAddComponentKey(cvId));

export const selectCVComponentRemove = (state, cvId) =>
  selectAPIResponse(state, cvRemoveComponentKey(cvId));

export const selectCVComponentRemoveStatus = (state, cvId) =>
  selectAPIStatus(state, cvRemoveComponentKey(cvId)) || STATUS.PENDING;

export const selectCVComponentRemoveError = (state, cvId) =>
  selectAPIError(state, cvRemoveComponentKey(cvId));

export const selectCreateContentViewFilter = state =>
  selectAPIResponse(state, CREATE_CONTENT_VIEW_FILTER_KEY) || {};

export const selectCreateContentViewFilterStatus = state =>
  selectAPIStatus(state, CREATE_CONTENT_VIEW_FILTER_KEY) || STATUS.PENDING;

export const selectCreateContentViewFilterError = state =>
  selectAPIError(state, CREATE_CONTENT_VIEW_FILTER_KEY);

export const selectCreateFilterRule = state =>
  selectAPIResponse(state, ADD_CONTENT_VIEW_FILTER_RULE) || {};

export const selectCreateFilterRuleStatus = state =>
  selectAPIStatus(state, ADD_CONTENT_VIEW_FILTER_RULE) || STATUS.PENDING;

export const selectCreateFilterRuleError = state =>
  selectAPIError(state, ADD_CONTENT_VIEW_FILTER_RULE);

export const selectCVActivationKeys = state =>
  selectAPIResponse(state, ACTIVATION_KEY_KEY) || {};

export const selectCVActivationKeysStatus = state =>
  selectAPIStatus(state, ACTIVATION_KEY_KEY) || STATUS.PENDING;

export const selectCVActivationKeysError = state =>
  selectAPIError(state, ACTIVATION_KEY_KEY);

export const selectCVHosts = state =>
  selectAPIResponse(state, HOSTS_KEY) || {};

export const selectCVHostsStatus = state =>
  selectAPIStatus(state, HOSTS_KEY) || STATUS.PENDING;

export const selectBulkRemoveCVVersionResponse = (state, cvId) =>
  selectAPIResponse(state, bulkRemoveVersionKey(cvId)) || {};

export const selectBulkRemoveCVVersionStatus = (state, cvId) =>
  selectAPIStatus(state, bulkRemoveVersionKey(cvId)) || STATUS.PENDING;

export const selectBulkRemoveCVVersionError = (state, cvId) =>
  selectAPIError(state, bulkRemoveVersionKey(cvId));

export const selectRemoveCVVersionResponse = (state, versionId, versionEnvironments) =>
  selectAPIResponse(state, cvRemoveVersionKey(versionId, versionEnvironments)) || {};

export const selectRemoveCVVersionStatus = (state, versionId, versionEnvironments) =>
  selectAPIStatus(state, cvRemoveVersionKey(versionId, versionEnvironments)) || STATUS.PENDING;

export const selectRemoveCVVersionError = (state, versionId, versionEnvironments) =>
  selectAPIError(state, cvRemoveVersionKey(versionId, versionEnvironments));


export const selectIsCVUpdating = state => state.katello?.contentViewDetails?.updating;

export const selectCVNeedsPublish = state => state.katello?.contentViewDetails?.needsPublish;
