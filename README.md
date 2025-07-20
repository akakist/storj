
# Storj JS Runtime

**Storj JS Runtime** is a high-performance JavaScript runtime for building server-side applications, delivering exceptional HTTP request processing speed and unique features like built-in routing and Telnet-based management. The project showcases JavaScript as a powerful tool for backend development, outperforming modern C++ solutions.

## Key Features

- **High Performance**: Handles up to 480k+ HTTP requests per second (based on dual-thread tests).
- **RPC**: Supports approximately 300k requests per second for message passing between nodes. Includes built-in routing with route memorization for backroute responses.
- **Telnet Interface**: Convenient server management inspired by Cisco routers, simplifying configuration and administration.
- **Cross-Platform**: Easily runs in Docker, enabling seamless integration and testing.

## Performance Results

Tests were conducted using `Apache Benchmark` (`ab`) on an Ubuntu virtual machine (ARM64, m4) with the command:

```bash
ab -n 1000000 -k -c 100 http://127.0.0.1:6012/
```

Two threads were used, with per-thread results shown in the table:

| Software                | Requests per Second (RPS) |
|-------------------------|---------------------------|
| Storj JS Runtime        | 240342.56 * 2             |
| uServer                 | 222193.68 * 2              |
| Go                      | 211944.02 * 2             |
| Boost.Asio              | 91792.11 * 2              |
| Node.js                 | 18192.07 * 2              |

**Conclusion**: Storj JS Runtime demonstrates over twice the performance of modern C++ solutions (Boost.Asio) and significantly outperforms Node.js and uServer.

## Installation

### Requirements
- Docker and Docker Compose.
- Access to Docker Hub for the `akakist/storj` image.

### Quick Start
1. Clone the repository or prepare the `docker-compose.yml` from the `storj` directory:
   ```bash
   git clone https://github.com/akakist/storj.git
   cd storj/storj
   ```
2. Launch the container using Docker Compose:
   ```bash
   docker compose up
   ```
3. Alternatively, pull and run the image directly:
   ```bash
   docker pull akakist/storj
   docker run -it akakist/storj
   ```

### Running Tests
1. Inside the container, execute:
   ```bash
   cd /storj/dist
   ls
   ```
2. Run tests starting with `t_*.js`:
   ```bash
   ./t_*.js
   ```

## Performance Testing
To replicate the benchmarks, use `Apache Benchmark`:
```bash
ab -n 1000000 -k -c 100 http://127.0.0.1:6012/
```
Ensure the server is running (port 6012).

## Discussion and Feedback
Join the discussion on Telegram: [t.me/storjsrun](https://t.me/storjsrun)

We welcome your feedback, suggestions, and ideas for improving the project!

## Future Development
We are actively continuing development and look forward to new ideas and contributions from the community.

