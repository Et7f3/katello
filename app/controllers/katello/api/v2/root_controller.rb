#
# Copyright 2014 Red Hat, Inc.
#
# This software is licensed to you under the GNU General Public
# License as published by the Free Software Foundation; either version
# 2 of the License (GPLv2) or (at your option) any later version.
# There is NO WARRANTY for this software, express or implied,
# including the implied warranties of MERCHANTABILITY,
# NON-INFRINGEMENT, or FITNESS FOR A PARTICULAR PURPOSE. You should
# have received a copy of GPLv2 along with this software; if not, see
# http://www.gnu.org/licenses/old-licenses/gpl-2.0.txt.

module Katello
class Api::V2::RootController < Api::V2::ApiController

  skip_before_filter :authorize # ok - only shows URLs available
  skip_before_filter :require_user

  resource_description do
    api_version 'v2'
    api_base_url "#{Katello.config.url_prefix}/api"
  end

  def resource_list
    all_routes = Engine.routes.routes
    all_routes.collect! { |r| r.path.spec.to_s }

    api_root_routes = all_routes.select do |path|
      path =~ %r{^/katello/api(\(/:api_version\))?/[^/]+/:id\(\.:format\)$}
    end
    api_root_routes = api_root_routes.collect do |path|
      path = path.sub("(/:api_version)", "")
      path[0..-(":id(.:format)".length + 1)]
    end

    api_root_routes.collect! { |r| { :rel => r["/katello/api/".size..-2], :href => r } }

    # provide some fake paths that does not exist (but rhsm is checking it's existance)
    api_root_routes << { :href => '/katello/api/packages/', :rel => 'packages' }
    api_root_routes << { :href => '/katello/api/status/', :rel => 'status' }
    api_root_routes << { :href => '/katello/api/guestids', :rel => 'guestids'}
    api_root_routes << { :href => '/katello/api/content_overrides', :rel => 'content_overrides'}
    api_root_routes << { :href => '/katello/api/available_releases', :rel => 'available_releases'}

    # katello only APIs
    katello_only = [
      "/katello/api/templates/",
      "/katello/api/changesets/",
      "/katello/api/repositories/",
      "/katello/api/packages/",
      "/katello/api/errata/",
      "/katello/api/disributions/",
      "/katello/api/tasks/",
      "/katello/api/gpg_keys/",
      "/katello/api/environments/"
    ]

    # filter out katello-only apis from headpin resource list
    if !Katello.config.katello?
      api_root_routes = api_root_routes.select { |api| !katello_only.include?(api[:href]) }
    end

    respond_for_index :collection => api_root_routes
  end

end
end
