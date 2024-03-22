import { Owner } from "./owner";

export class Repo {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private: boolean;
    owner: Owner;
    html_url: string;
    description: string;
    fork: boolean;
    url: string;
    forks_url: string;
    keys_url: string;
    collaborators_url: string;
    teams_url: string;
    hooks_url: string;
    issue_events_url: string;
    events_url: string;
    assignees_url: string;
    branches_url: string;
    tags_url: string;
    blobs_url: string;
    git_tags_url: string;
    git_refs_url: string;
    trees_url: string;
    statuses_url: string;
    languages_url: string;
    stargazers_url: string;
    contributors_url: string;
    subscribers_url: string;
    subscription_url: string;
    commits_url: string;
    git_commits_url: string;
    comments_url: string;
    issue_comment_url: string;
    contents_url: string;
    compare_url: string;
    merges_url: string;
    archive_url: string;
    downloads_url: string;
    issues_url: string;
    pulls_url: string;
    milestones_url: string;
    notifications_url: string;
    labels_url: string;
    releases_url: string;
    deployments_url: string;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    git_url: string;
    ssh_url: string;
    clone_url: string;
    svn_url: string;
    homepage: string;
    size: number;
    stargazers_count: number;
    watchers_count: number;
    language: string;
    has_issues: boolean;
    has_projects: boolean;
    has_downloads: boolean;
    has_wiki: boolean;
    has_pages: boolean;
    has_discussions: boolean;
    forks_count: number;
    mirror_url: string;
    archived: boolean;
    disabled: boolean;
    open_issues_count: number;
    license: any;
    allow_forking: boolean;
    is_template: boolean;
    web_commit_signoff_required: boolean;
    topics: string[];
    visibility: string;
    forks: number;
    open_issues: number;
    watchers: number;
    default_branch: string;
  
    constructor(
        id: number = 0,
        node_id: string = '',
        name: string = '',
        full_name: string = '',
        privateRepo: boolean = false,
        owner: Owner = new Owner(),
        html_url: string = '',
        description: string = '',
        fork: boolean = false,
        url: string = '',
        forks_url: string = '',
        keys_url: string = '',
        collaborators_url: string = '',
        teams_url: string = '',
        hooks_url: string = '',
        issue_events_url: string = '',
        events_url: string = '',
        assignees_url: string = '',
        branches_url: string = '',
        tags_url: string = '',
        blobs_url: string = '',
        git_tags_url: string = '',
        git_refs_url: string = '',
        trees_url: string = '',
        statuses_url: string = '',
        languages_url: string = '',
        stargazers_url: string = '',
        contributors_url: string = '',
        subscribers_url: string = '',
        subscription_url: string = '',
        commits_url: string = '',
        git_commits_url: string = '',
        comments_url: string = '',
        issue_comment_url: string = '',
        contents_url: string = '',
        compare_url: string = '',
        merges_url: string = '',
        archive_url: string = '',
        downloads_url: string = '',
        issues_url: string = '',
        pulls_url: string = '',
        milestones_url: string = '',
        notifications_url: string = '',
        labels_url: string = '',
        releases_url: string = '',
        deployments_url: string = '',
        created_at: string = '',
        updated_at: string = '',
        pushed_at: string = '',
        git_url: string = '',
        ssh_url: string = '',
        clone_url: string = '',
        svn_url: string = '',
        homepage: string = '',
        size: number = 0,
        stargazers_count: number = 0,
        watchers_count: number = 0,
        language: string = '',
        has_issues: boolean = false,
        has_projects: boolean = false,
        has_downloads: boolean = false,
        has_wiki: boolean = false,
        has_pages: boolean = false,
        has_discussions: boolean = false,
        forks_count: number = 0,
        mirror_url: string = '',
        archived: boolean = false,
        disabled: boolean = false,
        open_issues_count: number = 0,
        license: any = null,
        allow_forking: boolean = false,
        is_template: boolean = false,
        web_commit_signoff_required: boolean = false,
        topics: string[] = [],
        visibility: string = '',
        forks: number = 0,
        open_issues: number = 0,
        watchers: number = 0,
        default_branch: string = ''
      ) {
      this.id = id;
      this.node_id = node_id;
      this.name = name;
      this.full_name = full_name;
      this.private = privateRepo;
      this.owner = owner;
      this.html_url = html_url;
      this.description = description;
      this.fork = fork;
      this.url = url;
      this.forks_url = forks_url;
      this.keys_url = keys_url;
      this.collaborators_url = collaborators_url;
      this.teams_url = teams_url;
      this.hooks_url = hooks_url;
      this.issue_events_url = issue_events_url;
      this.events_url = events_url;
      this.assignees_url = assignees_url;
      this.branches_url = branches_url;
      this.tags_url = tags_url;
      this.blobs_url = blobs_url;
      this.git_tags_url = git_tags_url;
      this.git_refs_url = git_refs_url;
      this.trees_url = trees_url;
      this.statuses_url = statuses_url;
      this.languages_url = languages_url;
      this.stargazers_url = stargazers_url;
      this.contributors_url = contributors_url;
      this.subscribers_url = subscribers_url;
      this.subscription_url = subscription_url;
      this.commits_url = commits_url;
      this.git_commits_url = git_commits_url;
      this.comments_url = comments_url;
      this.issue_comment_url = issue_comment_url;
      this.contents_url = contents_url;
      this.compare_url = compare_url;
      this.merges_url = merges_url;
      this.archive_url = archive_url;
      this.downloads_url = downloads_url;
      this.issues_url = issues_url;
      this.pulls_url = pulls_url;
      this.milestones_url = milestones_url;
      this.notifications_url = notifications_url;
      this.labels_url = labels_url;
      this.releases_url = releases_url;
      this.deployments_url = deployments_url;
      this.created_at = created_at;
      this.updated_at = updated_at;
      this.pushed_at = pushed_at;
      this.git_url = git_url;
      this.ssh_url = ssh_url;
      this.clone_url = clone_url;
      this.svn_url = svn_url;
      this.homepage = homepage;
      this.size = size;
      this.stargazers_count = stargazers_count;
      this.watchers_count = watchers_count;
      this.language = language;
      this.has_issues = has_issues;
      this.has_projects = has_projects;
      this.has_downloads = has_downloads;
      this.has_wiki = has_wiki;
      this.has_pages = has_pages;
      this.has_discussions = has_discussions;
      this.forks_count = forks_count;
      this.mirror_url = mirror_url;
      this.archived = archived;
      this.disabled = disabled;
      this.open_issues_count = open_issues_count;
      this.license = license;
      this.allow_forking = allow_forking;
      this.is_template = is_template;
      this.web_commit_signoff_required = web_commit_signoff_required;
      this.topics = topics;
      this.visibility = visibility;
      this.forks = forks;
      this.open_issues = open_issues;
      this.watchers = watchers;
      this.default_branch = default_branch;
    }
  }