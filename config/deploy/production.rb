server "50.28.12.201", user: 'root', roles: [:app, :web, :db], :primary => true

set :ssh_options, { :forward_agent => true }
set :use_sudo, true
set :tmp_dir, "/tmp" 
set :deploy_to, "/srv/uz"
set :branch, "master"

namespace :fix do
	
	task :symlinks do
		on roles(:web) do
			execute "rm /home/urbanzen/www/wp-config.php"
			execute "ln -s /srv/uz/shared/uploads/ /home/urbanzen/www/wp-content/"
			execute "ln -s /srv/uz/shared/wp-config.php /home/urbanzen/www/wp-config.php"
		end
	end
		
end

#after 'deploy', 'fix:symlinks'