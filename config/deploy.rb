# config valid only for current version of Capistrano
# lock '3.4.0'

# base
set :application, 'uz'
set :repo_url, 'git@github.com:UrbanZen-Org/urbanzen.git'
set :linked_dirs, fetch(:linked_dirs, []).push('log')

# git
set :deploy_via, :remote_cache
set :scm, :git
set :keep_releases, 2