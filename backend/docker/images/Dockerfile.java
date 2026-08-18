FROM eclipse-temurin:21-jdk

WORKDIR /workspace

RUN apt-get update && \
    apt-get install -y bash && \
    rm -rf /var/lib/apt/lists/*

CMD ["bash"]