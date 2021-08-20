FROM ruby:2.7.2-slim
ENV TZ="America/Sao_Paulo"

ENV RAILS_LOG_TO_STDOUT true

ARG RAILS_ROOT="/backend"
ARG PACKAGES="build-essential git wget unzip apt-transport-https ca-certificates htop nano freetds-dev curl gnupg2"

RUN apt-get update && apt-get install -y --no-install-recommends $PACKAGES

RUN curl https://deb.nodesource.com/setup_12.x | bash
RUN curl https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install -y nodejs yarn

RUN mkdir -p $RAILS_ROOT

WORKDIR $RAILS_ROOT

COPY Gemfile Gemfile.lock ${RAILS_ROOT}/

RUN echo "gem: --no-document" > ~/.gemrc \
    && gem install bundler \
    && bundle config set without 'development test' \
    && bundle install

COPY . $RAILS_ROOT

RUN RAILS_ENV=production bundle exec rake assets:precompile
RUN yarn install --check-files

EXPOSE 81
RUN rm -f /guacu_backend/tmp/pids/server.pid
CMD ["rails", "server", "-b", "0.0.0.0", "-p", "3007"]